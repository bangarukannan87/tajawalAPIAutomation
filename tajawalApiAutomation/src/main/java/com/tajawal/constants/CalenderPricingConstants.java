package com.tajawal.constants;

public class CalenderPricingConstants {

    private static final String SCHEMAFILENAME = "CalendarPriceSchema.json";
    private static final String ADULTREGEX = "(ADT-)(?<PAX>[0-9]{1,})";
    private static final String CHILDREGEX = "(CHD-)(?<PAX>[0-9]{1,})";
    private static final String INFANTREGEX = "(INF-)(?<PAX>[0-9]{1,})";
    private static final String PAX = "PAX";
    private static final String SLASH = "/";

    public static String getSlash() {
        return SLASH;
    }

    public static String getPax() {
        return PAX;
    }

    public static String getSchemafilename() {
        return SCHEMAFILENAME;
    }

    public static String getAdultregex() {
        return ADULTREGEX;
    }

    public static String getChildregex() {
        return CHILDREGEX;
    }

    public static String getInfantregex() {
        return INFANTREGEX;
    }
}
