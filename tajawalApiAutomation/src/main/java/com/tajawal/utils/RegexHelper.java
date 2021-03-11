package com.tajawal.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexHelper {

    /**
     * This method perform regex match group based on patter, data and group
     * @param pattern
     * @param data
     * @param groupName
     * @return
     */
    public static String getRegexBygroupName(String pattern, String data, String groupName){
        String matchdata = null;
        Matcher matcher = Pattern.compile(pattern).matcher(data);
        while (matcher.find()){
            return matcher.group(groupName);
        }
        return matchdata;
    }
}
