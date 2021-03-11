
package com.tajawal.pojo.getHotelDetails.response;

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
    "atgHotelId",
    "chainBrandId",
    "hotelChainId",
    "propertyTypeId",
    "name",
    "starRating",
    "thumbnailUrl",
    "area",
    "rank",
    "longitude",
    "latitude",
    "distance",
    "distanceInMeters",
    "address",
    "distanceScore",
    "priorityScore",
    "similarityScore",
    "facilityIds",
    "review",
    "topPicks"
})
public class _1042560 {

    @JsonProperty("atgHotelId")
    private Integer atgHotelId;
    @JsonProperty("chainBrandId")
    private Integer chainBrandId;
    @JsonProperty("hotelChainId")
    private Integer hotelChainId;
    @JsonProperty("propertyTypeId")
    private Integer propertyTypeId;
    @JsonProperty("name")
    private Name name;
    @JsonProperty("starRating")
    private Integer starRating;
    @JsonProperty("thumbnailUrl")
    private String thumbnailUrl;
    @JsonProperty("area")
    private Area area;
    @JsonProperty("rank")
    private Integer rank;
    @JsonProperty("longitude")
    private Double longitude;
    @JsonProperty("latitude")
    private Double latitude;
    @JsonProperty("distance")
    private Double distance;
    @JsonProperty("distanceInMeters")
    private Double distanceInMeters;
    @JsonProperty("address")
    private Address address;
    @JsonProperty("distanceScore")
    private Double distanceScore;
    @JsonProperty("priorityScore")
    private Double priorityScore;
    @JsonProperty("similarityScore")
    private Double similarityScore;
    @JsonProperty("facilityIds")
    private List<Integer> facilityIds = null;
    @JsonProperty("review")
    private Review review;
    @JsonProperty("topPicks")
    private Object topPicks;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("atgHotelId")
    public Integer getAtgHotelId() {
        return atgHotelId;
    }

    @JsonProperty("atgHotelId")
    public void setAtgHotelId(Integer atgHotelId) {
        this.atgHotelId = atgHotelId;
    }

    @JsonProperty("chainBrandId")
    public Integer getChainBrandId() {
        return chainBrandId;
    }

    @JsonProperty("chainBrandId")
    public void setChainBrandId(Integer chainBrandId) {
        this.chainBrandId = chainBrandId;
    }

    @JsonProperty("hotelChainId")
    public Integer getHotelChainId() {
        return hotelChainId;
    }

    @JsonProperty("hotelChainId")
    public void setHotelChainId(Integer hotelChainId) {
        this.hotelChainId = hotelChainId;
    }

    @JsonProperty("propertyTypeId")
    public Integer getPropertyTypeId() {
        return propertyTypeId;
    }

    @JsonProperty("propertyTypeId")
    public void setPropertyTypeId(Integer propertyTypeId) {
        this.propertyTypeId = propertyTypeId;
    }

    @JsonProperty("name")
    public Name getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(Name name) {
        this.name = name;
    }

    @JsonProperty("starRating")
    public Integer getStarRating() {
        return starRating;
    }

    @JsonProperty("starRating")
    public void setStarRating(Integer starRating) {
        this.starRating = starRating;
    }

    @JsonProperty("thumbnailUrl")
    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    @JsonProperty("thumbnailUrl")
    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    @JsonProperty("area")
    public Area getArea() {
        return area;
    }

    @JsonProperty("area")
    public void setArea(Area area) {
        this.area = area;
    }

    @JsonProperty("rank")
    public Integer getRank() {
        return rank;
    }

    @JsonProperty("rank")
    public void setRank(Integer rank) {
        this.rank = rank;
    }

    @JsonProperty("longitude")
    public Double getLongitude() {
        return longitude;
    }

    @JsonProperty("longitude")
    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    @JsonProperty("latitude")
    public Double getLatitude() {
        return latitude;
    }

    @JsonProperty("latitude")
    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    @JsonProperty("distance")
    public Double getDistance() {
        return distance;
    }

    @JsonProperty("distance")
    public void setDistance(Double distance) {
        this.distance = distance;
    }

    @JsonProperty("distanceInMeters")
    public Double getDistanceInMeters() {
        return distanceInMeters;
    }

    @JsonProperty("distanceInMeters")
    public void setDistanceInMeters(Double distanceInMeters) {
        this.distanceInMeters = distanceInMeters;
    }

    @JsonProperty("address")
    public Address getAddress() {
        return address;
    }

    @JsonProperty("address")
    public void setAddress(Address address) {
        this.address = address;
    }

    @JsonProperty("distanceScore")
    public Double getDistanceScore() {
        return distanceScore;
    }

    @JsonProperty("distanceScore")
    public void setDistanceScore(Double distanceScore) {
        this.distanceScore = distanceScore;
    }

    @JsonProperty("priorityScore")
    public Double getPriorityScore() {
        return priorityScore;
    }

    @JsonProperty("priorityScore")
    public void setPriorityScore(Double priorityScore) {
        this.priorityScore = priorityScore;
    }

    @JsonProperty("similarityScore")
    public Double getSimilarityScore() {
        return similarityScore;
    }

    @JsonProperty("similarityScore")
    public void setSimilarityScore(Double similarityScore) {
        this.similarityScore = similarityScore;
    }

    @JsonProperty("facilityIds")
    public List<Integer> getFacilityIds() {
        return facilityIds;
    }

    @JsonProperty("facilityIds")
    public void setFacilityIds(List<Integer> facilityIds) {
        this.facilityIds = facilityIds;
    }

    @JsonProperty("review")
    public Review getReview() {
        return review;
    }

    @JsonProperty("review")
    public void setReview(Review review) {
        this.review = review;
    }

    @JsonProperty("topPicks")
    public Object getTopPicks() {
        return topPicks;
    }

    @JsonProperty("topPicks")
    public void setTopPicks(Object topPicks) {
        this.topPicks = topPicks;
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
