
public class Main {
public static void main(String[] args) {
int []arr={65,24,12,22,11,66};
for(int i=1;i<arr.length;i++){
    int key=arr[i];
    
    int j=i-1;

    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j=j-1;

    }

    arr[j+1]=key;
    
}
System.out.println("Insertion sorted array");
for(int num:arr){
    System.out.println(""+num);
}
}
}
