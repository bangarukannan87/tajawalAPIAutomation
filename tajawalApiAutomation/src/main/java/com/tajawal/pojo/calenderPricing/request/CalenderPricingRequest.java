
package com.tajawal.pojo.calenderPricing.request;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "leg",
    "cabin",
    "pax",
    "stops",
    "airline",
    "timeSlots",
    "airports"
})
public class CalenderPricingRequest {

    @JsonProperty("leg")
    private List<Leg> leg = null;
    @JsonProperty("cabin")
    private String cabin;
    @JsonProperty("pax")
    private Pax pax;
    @JsonProperty("stops")
    private List<Integer> stops = null;
    @JsonProperty("airline")
    private List<String> airline = null;
    @JsonProperty("timeSlots")
    private TimeSlots timeSlots;
    @JsonProperty("airports")
    private Airports airports;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("leg")
    public List<Leg> getLeg() {
        return leg;
    }

    @JsonProperty("leg")
    public void setLeg(List<Leg> leg) {
        this.leg = leg;
    }

    @JsonProperty("cabin")
    public String getCabin() {
        return cabin;
    }

    @JsonProperty("cabin")
    public void setCabin(String cabin) {
        this.cabin = cabin;
    }

    @JsonProperty("pax")
    public Pax getPax() {
        return pax;
    }

    @JsonProperty("pax")
    public void setPax(Pax pax) {
        this.pax = pax;
    }

    @JsonProperty("stops")
    public List<Integer> getStops() {
        return stops;
    }

    @JsonProperty("stops")
    public void setStops(List<Integer> stops) {
        this.stops = stops;
    }

    @JsonProperty("airline")
    public List<String> getAirline() {
        return airline;
    }

    @JsonProperty("airline")
    public void setAirline(List<String> airline) {
        this.airline = airline;
    }

    @JsonProperty("timeSlots")
    public TimeSlots getTimeSlots() {
        return timeSlots;
    }

    @JsonProperty("timeSlots")
    public void setTimeSlots(TimeSlots timeSlots) {
        this.timeSlots = timeSlots;
    }

    @JsonProperty("airports")
    public Airports getAirports() {
        return airports;
    }

    @JsonProperty("airports")
    public void setAirports(Airports airports) {
        this.airports = airports;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
