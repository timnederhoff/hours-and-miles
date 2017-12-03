package nl.timnederhoff.hoursandmiles.cucumber.stepdefs;

import nl.timnederhoff.hoursandmiles.HoursandmilesApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = HoursandmilesApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
