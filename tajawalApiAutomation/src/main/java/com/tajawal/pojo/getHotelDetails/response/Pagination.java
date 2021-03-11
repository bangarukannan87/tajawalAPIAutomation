
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
    "nextPageId",
    "pageNo",
    "pageSize",
    "totalResultsCount"
})
public class Pagination {

    @JsonProperty("nextPageId")
    private String nextPageId;
    @JsonProperty("pageNo")
    private Integer pageNo;
    @JsonProperty("pageSize")
    private Integer pageSize;
    @JsonProperty("totalResultsCount")
    private Integer totalResultsCount;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("nextPageId")
    public String getNextPageId() {
        return nextPageId;
    }

    @JsonProperty("nextPageId")
    public void setNextPageId(String nextPageId) {
        this.nextPageId = nextPageId;
    }

    @JsonProperty("pageNo")
    public Integer getPageNo() {
        return pageNo;
    }

    @JsonProperty("pageNo")
    public void setPageNo(Integer pageNo) {
        this.pageNo = pageNo;
    }

    @JsonProperty("pageSize")
    public Integer getPageSize() {
        return pageSize;
    }

    @JsonProperty("pageSize")
    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    @JsonProperty("totalResultsCount")
    public Integer getTotalResultsCount() {
        return totalResultsCount;
    }

    @JsonProperty("totalResultsCount")
    public void setTotalResultsCount(Integer totalResultsCount) {
        this.totalResultsCount = totalResultsCount;
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
