package com.tajawal.utils;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.Before;


//import cucumber.api.Scenario;
//import cucumber.api.java.Before;

public class ScenarioHooks {

    public static Scenario scenario;
    @Before
    public void setUp(Scenario scenarios){
        this.scenario = scenarios;
    }
}
