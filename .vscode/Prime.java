import java.util.Scanner;
public class Prime {
    public static void main(String[] args) {
Scanner sc=new Scanner(System.in);
System.out.println("Enter the number");
int num=sc.nextInt();
boolean isPrime=true;

if(num<=1){
    isPrime=false;
}else{
    for(int i=2;i<=num/2;i++){
        if(num%10==0){
            isPrime=false;
            break;
        }
    }
}
  if (isPrime) {
            System.out.println(num + " is a prime number.");
        } else {
            System.out.println(num + " is not a prime number.");
        }
}
}
