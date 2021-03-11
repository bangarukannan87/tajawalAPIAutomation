
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
    "adult",
    "child",
    "infant"
})
public class Pax {

    @JsonProperty("adult")
    private Integer adult;
    @JsonProperty("child")
    private Integer child;
    @JsonProperty("infant")
    private Integer infant;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("adult")
    public Integer getAdult() {
        return adult;
    }

    @JsonProperty("adult")
    public void setAdult(Integer adult) {
        this.adult = adult;
    }

    @JsonProperty("child")
    public Integer getChild() {
        return child;
    }

    @JsonProperty("child")
    public void setChild(Integer child) {
        this.child = child;
    }

    @JsonProperty("infant")
    public Integer getInfant() {
        return infant;
    }

    @JsonProperty("infant")
    public void setInfant(Integer infant) {
        this.infant = infant;
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
