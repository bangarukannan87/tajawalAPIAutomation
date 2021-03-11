package com.tajawal.service.implementation;

import com.tajawal.constants.CalenderPricingConstants;
import com.tajawal.pojo.calenderPricing.request.CalenderPricingRequest;
import com.tajawal.pojo.calenderPricing.request.Leg;
import com.tajawal.pojo.calenderPricing.request.Pax;
import com.tajawal.utils.DateHelper;
import com.tajawal.utils.RegexHelper;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import static java.lang.Integer.parseInt;

public class CalenderPricingService {

    /**
     * This method is to create the service request for Calendar Pricing
     * @param sector
     * @param travelDates
     * @param cabin
     * @param passengerType
     * @param stops
     * @param airlines
     * @return
     */
    public CalenderPricingRequest createCalenderPricingReq(String sector, String travelDates, String cabin, String passengerType,
                                         String stops, String airlines){
        CalenderPricingRequest calenderPricingRequest = new CalenderPricingRequest();
        List<Leg> legList = new LinkedList<>();
        calenderPricingRequest.setLeg(legList);
        for(int i=0; i<sector.split(CalenderPricingConstants.getSlash()).length; i++){
            Leg leg = new Leg();
            leg.setOriginId(sector.split(CalenderPricingConstants.getSlash())[i].split("-")[0]);
            leg.setDestinationId(sector.split(CalenderPricingConstants.getSlash())[i].split("-")[1]);
            leg.setDepartureFrom(DateHelper.getFutureDate(parseInt(travelDates.split(CalenderPricingConstants.getSlash())[i].split("-")[0]),"yyyy-MM-dd"));
            leg.setDepartureTo(DateHelper.getFutureDate(parseInt(travelDates.split(CalenderPricingConstants.getSlash())[i].split("-")[1]),"yyyy-MM-dd"));
            legList.add(leg);
        }
        calenderPricingRequest.setCabin(cabin);
        Pax pax = new Pax();
        pax.setAdult(Integer.valueOf(RegexHelper.getRegexBygroupName(CalenderPricingConstants.getAdultregex(),passengerType,CalenderPricingConstants.getPax())));
        pax.setChild(Integer.valueOf(RegexHelper.getRegexBygroupName(CalenderPricingConstants.getChildregex(),passengerType,CalenderPricingConstants.getPax())));
        pax.setInfant(Integer.valueOf(RegexHelper.getRegexBygroupName(CalenderPricingConstants.getInfantregex(),passengerType,CalenderPricingConstants.getPax())));
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
}
