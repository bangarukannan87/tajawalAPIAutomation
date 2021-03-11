
package com.tajawal.pojo.calenderPricing.request;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "originId",
    "destinationId",
    "departureFrom",
    "departureTo"
})
public class Leg {

    @JsonProperty("originId")
    private String originId;
    @JsonProperty("destinationId")
    private String destinationId;
    @JsonProperty("departureFrom")
    private String departureFrom;
    @JsonProperty("departureTo")
    private String departureTo;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("originId")
    public String getOriginId() {
        return originId;
    }

    @JsonProperty("originId")
    public void setOriginId(String originId) {
        this.originId = originId;
    }

    @JsonProperty("destinationId")
    public String getDestinationId() {
        return destinationId;
    }

    @JsonProperty("destinationId")
    public void setDestinationId(String destinationId) {
        this.destinationId = destinationId;
    }

    @JsonProperty("departureFrom")
    public String getDepartureFrom() {
        return departureFrom;
    }

    @JsonProperty("departureFrom")
    public void setDepartureFrom(String departureFrom) {
        this.departureFrom = departureFrom;
    }

    @JsonProperty("departureTo")
    public String getDepartureTo() {
        return departureTo;
    }

    @JsonProperty("departureTo")
    public void setDepartureTo(String departureTo) {
        this.departureTo = departureTo;
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
