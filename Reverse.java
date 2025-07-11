public class Reverse {
    public static void main(String[] args) {
        
    
    //reverse a string
    String str="Anuj maurya";
    int reversed=0;

    for(int i=str.length()-1;i>=0;i--){
        reversed=reversed+str.charAt(i);

    }
    System.out.println("your output is"+reversed);
}
}