
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
    "hotelId",
    "count",
    "name",
    "sourcesCount",
    "score",
    "scoreDescription",
    "scoreColor"
})
public class Review {

    @JsonProperty("hotelId")
    private Integer hotelId;
    @JsonProperty("count")
    private Integer count;
    @JsonProperty("name")
    private String name;
    @JsonProperty("sourcesCount")
    private Integer sourcesCount;
    @JsonProperty("score")
    private Double score;
    @JsonProperty("scoreDescription")
    private ScoreDescription scoreDescription;
    @JsonProperty("scoreColor")
    private String scoreColor;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("hotelId")
    public Integer getHotelId() {
        return hotelId;
    }

    @JsonProperty("hotelId")
    public void setHotelId(Integer hotelId) {
        this.hotelId = hotelId;
    }

    @JsonProperty("count")
    public Integer getCount() {
        return count;
    }

    @JsonProperty("count")
    public void setCount(Integer count) {
        this.count = count;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("sourcesCount")
    public Integer getSourcesCount() {
        return sourcesCount;
    }

    @JsonProperty("sourcesCount")
    public void setSourcesCount(Integer sourcesCount) {
        this.sourcesCount = sourcesCount;
    }

    @JsonProperty("score")
    public Double getScore() {
        return score;
    }

    @JsonProperty("score")
    public void setScore(Double score) {
        this.score = score;
    }

    @JsonProperty("scoreDescription")
    public ScoreDescription getScoreDescription() {
        return scoreDescription;
    }

    @JsonProperty("scoreDescription")
    public void setScoreDescription(ScoreDescription scoreDescription) {
        this.scoreDescription = scoreDescription;
    }

    @JsonProperty("scoreColor")
    public String getScoreColor() {
        return scoreColor;
    }

    @JsonProperty("scoreColor")
    public void setScoreColor(String scoreColor) {
        this.scoreColor = scoreColor;
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
