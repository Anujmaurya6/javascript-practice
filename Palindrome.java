public class Palindrome {
    public static void main(String[] args) {
        String str="Anuj maurya";
        String reversed="";
        for(int i=str.length()-1;i>=0;i--){
            reversed=reversed+str.charAt(i);
        }
if(reversed.equals(str)){
    System.out.println("your string is palindrome"+reversed);

}else{
    System.out.println("your string is not palindrome");
}
    }
    
}
