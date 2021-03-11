package runCukes.hotelDetails;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/HotelDetailsTest",
                            "json:target/html-reports/HotelDetailsTest.json"},
        features = {"src/main/resources/features/HotelDetails.feature"},
        glue = {"com.tajawal.step.definition","com.tajawal.utils"},
        tags = {"@TC_HotelDetails"}
)
public class HotelDetailsTest {
}
