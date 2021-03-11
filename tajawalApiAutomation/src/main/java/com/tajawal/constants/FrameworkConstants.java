package com.tajawal.constants;



public final class FrameworkConstants {


    private FrameworkConstants(){
    }

    private static final String CONFIGPATH = System.getProperty("user.dir")+"/src/main/resources/config/config.properties";
    private static final String CONFIGFOLDERPATH = System.getProperty("user.dir")+"/src/main/resources/config/";
    private static final String SCHEMAFOLDERPATH = System.getProperty("user.dir")+"/src/main/java/com/tajawal/schemas/";

    public static String getConfigpath(){
        return CONFIGPATH;
    }

    public static String getSchemafolderpath() {
        return SCHEMAFOLDERPATH;
    }

    public static String getConfigFolderpath(){
        return CONFIGFOLDERPATH;
    }
}
