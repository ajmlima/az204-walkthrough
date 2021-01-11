"use strict";

const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://ps-cosmosdb-test-22.documents.azure.com:443/";
const key = "2uEDYnXryglpKEgVI6iwfKGRJs6ncbzKyhS73aTxoLPfaIvbKStQxVrRkcarINyE35z7ck491qbKr3x9elnKew==";
const databaseName = "sampledb";
const containerName = "samplecontainer";

// DON'T EDIT BELOW THIS LINE ------------------------

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseName);

module.exports.getContainer = () => database.container(containerName);
module.exports.getDatabase = () => database;
module.exports.CONTAINER_NAME = containerName;
