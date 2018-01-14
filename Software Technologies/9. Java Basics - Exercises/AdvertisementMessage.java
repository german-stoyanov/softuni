import java.util.Random;
import java.util.Scanner;

public class AdvertisementMessage {

    public static void main(String[] args) {
        String input = new Scanner(System.in).nextLine();
        int totalLines = Integer.parseInt(input);
        Random rnd = new Random();

        String[] phrases = "Excellent product., Such a great product., I always use that product., Best product of its category., Exceptional product., I can’t live without this product.".split(",");
        String[] events = "Now I feel good., I have succeeded with this product., Makes miracles. I am happy of the results!, I cannot believe but now I feel awesome., Try it yourself, I am very satisfied., I feel great!".split(",");
        String[] author = "Diana, Petya, Stella, Elena, Katya, Iva, Annie, Eva".split(",");
        String[] cities = "Burgas, Sofia, Plovdiv, Varna, Ruse".split(",");

        for (int i = 0; i < totalLines; i++) {
            System.out.println(phrases[rnd.nextInt(phrases.length - 1) + 0] + events[rnd.nextInt(events.length - 1) + 0] + author[rnd.nextInt(author.length - 1) + 0] + cities[rnd.nextInt(cities.length - 1) + 0]);
        }
    }
}
