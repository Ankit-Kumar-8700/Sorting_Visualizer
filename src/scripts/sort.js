import {set_c_delay,array_size,div_update,divs,div_sizes,enable_buttons} from "./helper";

export const Bubble=()=>{
    set_c_delay(0);

    for(let i=0;i<array_size-1;i++)
    {
        let j=0;
        for(j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                let temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}





const swap=(i,j)=>{
    div_update(divs[i],div_sizes[i],"red");//Color update
    div_update(divs[j],div_sizes[j],"red");//Color update

    let temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"red");//Height update
    div_update(divs[j],div_sizes[j],"red");//Height update

    div_update(divs[i],div_sizes[i],"blue");//Color update
    div_update(divs[j],div_sizes[j],"blue");//Color update
}

const max_heapify=(n,i)=>
{
    let largest=i;
    let l=2*i+1;
    let r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!==i)
        {
            div_update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!==i)
        {
            div_update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(largest!==i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}
export const Heap=()=>{
    set_c_delay(0);
    let i=0;
    for(i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"green");//Color update
        div_update(divs[i],div_sizes[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"blue");//Color update
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update

    enable_buttons();
}






export const Insertion=()=>{
    set_c_delay(0);
    let j=0;
    for(j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        let key= div_sizes[j];
        let i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i===(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(let t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enable_buttons();
}






const merge_sort=(start,mid,end)=>
{
    let p=start,q=mid+1;

    let Arr=[],k=0;

    for(let i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    for(let t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
    }
}
const merge_partition=(start,end)=>
{
    if(start < end)
    {
        let mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
export const Merge=()=>{
    set_c_delay(0);

    merge_partition(0,array_size-1);

    enable_buttons();
}









const quick_partition =(start, end)=>
{
    let i = start + 1;
    let piv = div_sizes[start] ;//make the first element as pivot element.
    div_update(divs[start],div_sizes[start],"yellow");//Color update

        for(let j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[j],div_sizes[j],"red");//Color update

                let temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[j],div_sizes[j],"red");//Height update

                div_update(divs[i],div_sizes[i],"blue");//Height update
                div_update(divs[j],div_sizes[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    let temp1=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp1;

    div_update(divs[start],div_sizes[start],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(let t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}
const quick_sort =(start, end )=>
{
    if( start < end )
    {
        //stores the position of pivot element
        let piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
export const Quick=()=>{
    set_c_delay(0);

    quick_sort(0,array_size-1);

    enable_buttons();
}





export const Selection=()=>{
    set_c_delay(0);
    let i=0;
    for(i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color update

        let index_min=i;

        for(let j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!==i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(index_min!==i)
        {
            let temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[array_size-1],div_sizes[array_size-1],"green");//Color update

    enable_buttons();
}