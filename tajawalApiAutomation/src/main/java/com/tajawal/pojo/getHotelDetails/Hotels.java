
package com.tajawal.pojo.getHotelDetails;

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
    "1042560"
})
public class Hotels {

    @JsonProperty("1042560")
    private com.tajawal.pojo.getHotelDetails._1042560 _1042560;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("1042560")
    public com.tajawal.pojo.getHotelDetails._1042560 get1042560() {
        return _1042560;
    }

    @JsonProperty("1042560")
    public void set1042560(com.tajawal.pojo.getHotelDetails._1042560 _1042560) {
        this._1042560 = _1042560;
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
