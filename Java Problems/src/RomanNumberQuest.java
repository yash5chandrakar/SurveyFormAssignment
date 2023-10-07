import java.util.HashMap;
import java.util.Scanner;

public class RomanNumberQuest {
    public static void main(String[] args) {
        // CloudVana Solutions P-2
        Scanner sc = new Scanner(System.in);
        String input = sc.next();

        int result = getRomanNumber(input);
        System.out.println(result);
    }

    public static int getRomanNumber(String str){
        int num = 0;

        HashMap<Character, Integer> hashMap = new HashMap<>();
        hashMap.put('I',1);
        hashMap.put('V',5);
        hashMap.put('X',10);
        hashMap.put('L',50);
        hashMap.put('C',100);
        hashMap.put('D',500);
        hashMap.put('M',1000);
        str = str.replace("IV","IIII");
        str = str.replace("IX","VIIII");
        str = str.replace("XL","XXXX");
        str = str.replace("XC","LXXXX");
        str = str.replace("CD","CCCC");
        str = str.replace("CM","DCCCC");

        for (int i=0;i<str.length();i++){
            num += (int)(hashMap.get(str.charAt(i)));
        }

        return num;
    }
}
