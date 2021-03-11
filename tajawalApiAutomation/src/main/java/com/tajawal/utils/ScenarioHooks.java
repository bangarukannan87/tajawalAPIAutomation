package com.tajawal.utils;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.Before;



public class ScenarioHooks {

    public static Scenario scenario;

    /**
     * This hooks method is to initialize the cucumber scenario
     * @param scenarios
     */
    @Before
    public void setUp(Scenario scenarios){
        this.scenario = scenarios;
    }
}
