package com.tajawal.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.networknt.schema.JsonSchema;
import com.networknt.schema.JsonSchemaFactory;
import com.networknt.schema.SpecVersion;
import com.networknt.schema.ValidationMessage;

import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Set;

public class Utility {


    /**
     * This method is used to validate the JSON Response against JSON schema
     * @param schemaPath
     * @param responseJSON
     * @return
     * @throws Exception
     */
    public static ArrayList validateSchema(String schemaPath ,String responseJSON) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonSchemaFactory schemaFactory = JsonSchemaFactory.getInstance(SpecVersion.VersionFlag.V201909);
        ArrayList errorList = new ArrayList();
        InputStream schemaStream = new FileInputStream(schemaPath);
        InputStream jsonStream = new ByteArrayInputStream(responseJSON.getBytes());
        JsonNode json = objectMapper.readTree(jsonStream);
        JsonSchema schema = schemaFactory.getSchema(schemaStream);
        Set<ValidationMessage> validationResult = schema.validate(json);
        if (!validationResult.isEmpty()) {
            validationResult.forEach(vm -> errorList.add(vm.getMessage()));
        }
        return errorList;
    }
}
