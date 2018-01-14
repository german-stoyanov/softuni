//92/100

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Locale;
import java.util.Scanner;

public class CountWorkingDays {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy", Locale.ENGLISH);

        LocalDate firstDate = LocalDate.parse(scanner.nextLine(), formatter);
        LocalDate secondDate = LocalDate.parse(scanner.nextLine(), formatter);

        int workingsDaysCounter = 0;
       // long days = ChronoUnit.DAYS.between(firstDate, secondDate);

        for (LocalDate date = firstDate; date.isBefore(secondDate); date=date.plusDays(1)) {
                if(!isHoliday(firstDate)) {
                    workingsDaysCounter++;
                }

            firstDate = firstDate.plusDays(1);
        }

        if(!isHoliday(firstDate)) {
            workingsDaysCounter++;
        }

        System.out.println(workingsDaysCounter);
    }

    public static boolean isHoliday(LocalDate date) {
        int dayOfWeek = date.getDayOfWeek().getValue();
        int month = date.getMonth().getValue();
        int day = date.getDayOfMonth();

        if(dayOfWeek == 6 ||
                dayOfWeek == 7 ||
                (month == 1 && day == 1 ) ||
                (month == 3 && day == 3 ) ||
                (month == 5 && (day == 1 || day == 6 || day == 24)) ||
                (month == 9 && (day == 6 || day == 22)) ||
                (month == 11 && day == 1 ) ||
                (month == 12 && (day == 24 || day == 25 || day == 26))) {

            return true;
        }

        return false;
    }
}