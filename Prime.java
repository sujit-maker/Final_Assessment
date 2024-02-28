public class Prime {

    public static void main(String[] args) {
        int a = 5 ;
        int temp = 0;

        for (int i = 2; i <= a / 2; i++) {
            if (a % i == 0) {
                temp = temp + 1;
                break;
            }
        }

        if (temp == 0) {
            System.out.println(a+" " +"is prime number");
        } else {
            System.out.println(a+" " + "is not prime number");
        }
    }

}










