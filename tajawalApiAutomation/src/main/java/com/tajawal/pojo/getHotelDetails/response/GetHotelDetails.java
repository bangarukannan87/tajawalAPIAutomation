
package com.tajawal.pojo.getHotelDetails.response;

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
    "sortBy",
    "distanceShow",
    "countryCode",
    "hotels",
    "distanceDetails",
    "pagination",
    "geoCoordinate"
})
public class GetHotelDetails {

    @JsonProperty("sortBy")
    private String sortBy;
    @JsonProperty("distanceShow")
    private Boolean distanceShow;
    @JsonProperty("countryCode")
    private String countryCode;
    @JsonProperty("hotels")
    private Hotels hotels;
    @JsonProperty("distanceDetails")
    private DistanceDetails distanceDetails;
    @JsonProperty("pagination")
    private Pagination pagination;
    @JsonProperty("geoCoordinate")
    private GeoCoordinate geoCoordinate;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("sortBy")
    public String getSortBy() {
        return sortBy;
    }

    @JsonProperty("sortBy")
    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }

    @JsonProperty("distanceShow")
    public Boolean getDistanceShow() {
        return distanceShow;
    }

    @JsonProperty("distanceShow")
    public void setDistanceShow(Boolean distanceShow) {
        this.distanceShow = distanceShow;
    }

    @JsonProperty("countryCode")
    public String getCountryCode() {
        return countryCode;
    }

    @JsonProperty("countryCode")
    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    @JsonProperty("hotels")
    public Hotels getHotels() {
        return hotels;
    }

    @JsonProperty("hotels")
    public void setHotels(Hotels hotels) {
        this.hotels = hotels;
    }

    @JsonProperty("distanceDetails")
    public DistanceDetails getDistanceDetails() {
        return distanceDetails;
    }

    @JsonProperty("distanceDetails")
    public void setDistanceDetails(DistanceDetails distanceDetails) {
        this.distanceDetails = distanceDetails;
    }

    @JsonProperty("pagination")
    public Pagination getPagination() {
        return pagination;
    }

    @JsonProperty("pagination")
    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }

    @JsonProperty("geoCoordinate")
    public GeoCoordinate getGeoCoordinate() {
        return geoCoordinate;
    }

    @JsonProperty("geoCoordinate")
    public void setGeoCoordinate(GeoCoordinate geoCoordinate) {
        this.geoCoordinate = geoCoordinate;
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
