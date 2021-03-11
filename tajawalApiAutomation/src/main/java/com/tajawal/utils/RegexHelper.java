package com.tajawal.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexHelper {

    public static String getRegexBygroupName(String pattern, String data, String groupName){
        String matchdata = null;
        Matcher matcher = Pattern.compile(pattern).matcher(data);
        while (matcher.find()){
            return matcher.group(groupName);
        }
        return matchdata;
    }
}
