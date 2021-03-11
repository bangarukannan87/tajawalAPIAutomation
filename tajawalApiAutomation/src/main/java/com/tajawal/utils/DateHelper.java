package com.tajawal.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

public class DateHelper {

    /**
     * This method returns date value in requested format
     * @param noOfDays
     * @param format
     * @return
     */
    public static String getFutureDate(int noOfDays, String format){
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, noOfDays);
        return simpleDateFormat.format(calendar.getTime());
    }

    /**
     * This method returns date difference value between two dates
     * @param startDate
     * @param secondDate
     * @param format
     * @return
     */
    public static int getDateDifference(String startDate, String secondDate, String format){
        SimpleDateFormat sdf = new SimpleDateFormat(format, Locale.ENGLISH);
        Date firstParseDate ;
        Date secondParseDate;
        long diff  = 0;
        try {
            firstParseDate = sdf.parse(startDate);
            secondParseDate = sdf.parse(secondDate);
            long diffInMillies = Math.abs(secondParseDate.getTime() - firstParseDate.getTime());
            diff = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
        } catch (ParseException e) {
            e.printStackTrace();

        }finally {
            return (int) diff;
        }
    }

}
