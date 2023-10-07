import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // CloudVana Solutions P-1
        int [] arr = {1,2,3,4,5,6,7};

        for(int i=0;i<arr.length;i++){
            int randomIndex = getRandomIndex(i, arr.length);
            int tempValue = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = tempValue;
        }

        System.out.println(Arrays.toString(arr));
    }

    public static int getRandomIndex(int num,int maxLen){
        int index = (int) (Math.random()*(maxLen-1));

        if(index==num) {
            return getRandomIndex(num, maxLen);
        }

        return index;
    }
}