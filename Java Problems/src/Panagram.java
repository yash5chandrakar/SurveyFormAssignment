import java.util.HashSet;
import java.util.Scanner;

public class Panagram {
    public static void main(String[] args) {
        // CloudVana Solutions P-3

        Scanner sc = new Scanner(System.in);
        String input = sc.next();
        // abcdefghijklmnopqrstuvwxyz
        boolean result = isPanagram(input);
        if(result){
            System.out.println("Given String is a Panagram !");
        }
        else{
            System.out.println("Given String is not a Panagram !");
        }
    }

    public static boolean isPanagram(String str){
        if(str.length()<26){
            return false;
        }

        HashSet<Character> hashSet = new HashSet<>();

        for(int i=0;i<str.length();i++){
            if(!hashSet.contains(str.charAt(i))){
                hashSet.add(str.charAt(i));
            }
        }

        if(hashSet.size()==26){
            return true;
        }
        return false;
    }
}
