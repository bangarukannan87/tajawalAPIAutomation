package com.tajawal.constants;



public final class FrameworkConstants {


    private FrameworkConstants(){
    }

    private static final String CONFIGPATH = System.getProperty("user.dir")+"/src/main/resources/config/config.properties";
    private static final String CONFIGFOLDERPATH = System.getProperty("user.dir")+"/src/main/resources/config/";

    public static String getConfigpath(){
        return CONFIGPATH;
    }
    public static String getConfigFolderpath(){
        return CONFIGFOLDERPATH;
    }
}
