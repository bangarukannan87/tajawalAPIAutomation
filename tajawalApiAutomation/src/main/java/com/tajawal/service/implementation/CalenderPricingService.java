package com.tajawal.service.implementation;

import com.tajawal.pojo.calenderPricing.request.CalenderPricingRequest;
import com.tajawal.pojo.calenderPricing.request.Leg;
import com.tajawal.pojo.calenderPricing.request.Pax;
import com.tajawal.utils.DateHelper;
import com.tajawal.utils.RegexHelper;
import javafx.scene.paint.Stop;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static java.lang.Integer.parseInt;

public class CalenderPricingService {

//    sector = DXB-MAA/MAA-DXB
//    travelDates = 100-102/105-110
    public CalenderPricingRequest createCalenderPricingReq(String sector, String travelDates, String cabin, String passengerType,
                                         String stops, String airlines){
        CalenderPricingRequest calenderPricingRequest = new CalenderPricingRequest();
        List<Leg> legList = new LinkedList<>();
        calenderPricingRequest.setLeg(legList);
        for(int i=0; i<sector.split("/").length; i++){
            Leg leg = new Leg();
            leg.setOriginId(sector.split("/")[i].split("-")[0]);
            leg.setDestinationId(sector.split("/")[i].split("-")[1]);
            leg.setDepartureFrom(DateHelper.getFutureDate(parseInt(travelDates.split("/")[i].split("-")[0]),"yyyy-MM-dd"));
            leg.setDepartureTo(DateHelper.getFutureDate(parseInt(travelDates.split("/")[i].split("-")[1]),"yyyy-MM-dd"));
            legList.add(leg);
        }
        calenderPricingRequest.setCabin(cabin);
        Pax pax = new Pax();
        pax.setAdult(Integer.valueOf(RegexHelper.getRegexBygroupName("(ADT-)(?<PAX>[0-9]{1,})",passengerType,"PAX")));
        pax.setChild(Integer.valueOf(RegexHelper.getRegexBygroupName("(CHD-)(?<PAX>[0-9]{1,})",passengerType,"PAX")));
        pax.setInfant(Integer.valueOf(RegexHelper.getRegexBygroupName("(INF-)(?<PAX>[0-9]{1,})",passengerType,"PAX")));
        calenderPricingRequest.setPax(pax);
        List<Integer> stopList = new ArrayList<>();
        if(StringUtils.isNotBlank(stops)){
            stopList = Arrays.asList(stops.split(",")).stream().map(n -> Integer.valueOf(n)).collect(Collectors.toList());
        }
        calenderPricingRequest.setStops(stopList);
        List<String> airlineList = new ArrayList<>();
        if(StringUtils.isNotBlank(airlines)){
            airlineList = Arrays.asList(airlines.split(","));
        }
        calenderPricingRequest.setAirline(airlineList);

        return calenderPricingRequest;
    }

    public static void regex(){
        Matcher matcher = Pattern.compile("(ADT-)(?<ADULT>[0-9]{1,})").matcher("ADT-1,CHD-2,INF-3");
//        if(matcher.matches()){
//            System.out.println(matcher.group("ADULT"));
//        }
        while (matcher.find()){
            System.out.println(matcher.group("ADULT"));
            System.out.println("TEST");
        }
    }

    public static void main(String[] args){
        regex();
    }
}
