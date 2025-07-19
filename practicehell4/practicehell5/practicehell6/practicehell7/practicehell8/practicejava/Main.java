import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
         Scanner sc=new Scanner(System.in);
        System.out.println("enter the size of array:");
        int num=sc.nextInt();

        int []arr=new int[num];

        System.out.println("enter the" + num +"elements:");
        for(int i=0;i<num;i++){
            arr[i]=sc.nextInt();
        }
        System.out.println("enter the value");
        int value=sc.nextInt();

        System.out.println("Enter the position");
        int pos=sc.nextInt();

        int[] newArr= new int[num+1];

        for(int i=0,j=0;i<newArr.length;i++){
            if(i==pos){
                newArr[i]=value;
            }
        }
    }
}