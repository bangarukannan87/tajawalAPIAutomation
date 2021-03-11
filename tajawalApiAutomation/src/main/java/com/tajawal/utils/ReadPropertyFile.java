package com.tajawal.utils;

import com.tajawal.constants.FrameworkConstants;
import io.cucumber.datatable.dependency.difflib.StringUtills;
import org.apache.commons.lang3.StringUtils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReadPropertyFile {

    private static Properties properties = new Properties();
    private static InputStream input = null;
    private static Properties configProperties;
    private static Properties urlProperties;
    static {
        try {
            configProperties = loadPropertiesFile(FrameworkConstants.getConfigpath());
            urlProperties = StringUtils.isBlank(System.getProperty("test.environment")) ?
                    loadPropertiesFile(FrameworkConstants.getConfigFolderpath()+configProperties.getProperty("test.environment")+"_config.properties") :
                    loadPropertiesFile(FrameworkConstants.getConfigFolderpath()+System.getProperty("test.environment")+"_config.properties");
        }catch (Exception e){
            urlProperties = loadPropertiesFile(FrameworkConstants.getConfigFolderpath()+configProperties.getProperty("test.environment")+"_config.properties");
        }
    }

    /**
     * This method is load the property files data
     * @param filePath
     * @return
     */
    private static Properties loadPropertiesFile(String filePath){
        try {
            properties.load(new FileInputStream(filePath));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return properties;
    }

    public static Properties getUrlProperties(){
        return urlProperties;
    }
}
