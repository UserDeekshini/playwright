import { Page, APIResponse } from '@playwright/test';
import fs from 'fs';
import fetchToCurl from 'fetch-to-curl';
import StringUtil from '../../helper/Random';
import RESTResponse from './RESTResponse';
import Logger from '../../helper/Log';

export default class RESTRequest {
  readonly REST_JSON_REQUEST_PATH = 'src/resources/API/REST/';
  readonly BLANK = '';
  constructor(private page: Page) {}
  /**
   * Creates request body from JSON file by replacing the input parameters
   * @param jsonFileName
   * @param data
   * @returns json
   */
  public async createRequestBody(jsonFileName: string, data: any): Promise<string> {
    let json = fs.readFileSync(this.REST_JSON_REQUEST_PATH + jsonFileName, 'utf-8');
    json = StringUtil.formatStringValue(json, data);
    return json;
  }
  /**
   * Make POST request and return response
   * @param endPoint
   * @param requestHeader
   * @param jsonAsString
   * @param description
   * @returns setRestResponse
   */
  public async post(
    endPoint: string,
    requestHeader: any,
    jsonAsString: string,
    description: string
  ): Promise<RESTResponse> {
    const headersAsJson = JSON.parse(JSON.stringify(requestHeader));
    Logger.info(`Making POST request for ${description}`);
    this.printRequest(endPoint, headersAsJson, jsonAsString, 'post');
    const response = await this.page.request.post(endPoint, {
      headers: headersAsJson,
      data: JSON.parse(jsonAsString),
    });
    return await this.setRestResponse(response, description);
  }
  /**
   * Sets the API Response into RestResponse object
   * @param response
   * @param description
   * @returns RestResponse object
   */
  private async setRestResponse(response: APIResponse, description: string): Promise<RESTResponse> {
    const body = await response.text();
    const headers = response.headers();
    const statusCode = response.status();
    const restResponse: RESTResponse = new RESTResponse(headers, body, statusCode, description);
    const responseBody =
      body === this.BLANK ? this.BLANK : JSON.stringify(JSON.parse(body), undefined, 2);
    Logger.info(`Response body: ${responseBody}`);
    return restResponse;
  }
  /**
   * Make Get request and return response
   * @param endPoint
   * @param requestHeader
   * @param description
   * @returns setRestResponse
   */
  public async get(
    endPoint: string,
    requestHeader: any,
    description: string
  ): Promise<RESTResponse> {
    const headersAsJson = JSON.parse(JSON.stringify(requestHeader));
    Logger.info(`Making GET request for ${description}`);
    this.printRequest(endPoint, headersAsJson, '', 'get');
    const response = await this.page.request.get(endPoint, { headers: headersAsJson });
    return await this.setRestResponse(response, description);
  }
  /**
   * Make Put request and return response
   * @param endPoint
   * @param requestHeader
   * @param jsonAsString
   * @param description
   * @returns setRestResponse
   */
  public async put(
    endPoint: string,
    requestHeader: any,
    jsonAsString: any,
    description: string
  ): Promise<RESTResponse> {
    const headersAsJson = JSON.parse(JSON.stringify(requestHeader));
    Logger.info(`Making PUT request for ${description}`);
    this.printRequest(endPoint, headersAsJson, jsonAsString, 'put');
    const response = await this.page.request.put(endPoint, {
      headers: headersAsJson,
      data: JSON.parse(jsonAsString),
    });
    return await this.setRestResponse(response, description);
  }
  /**
   * Make Patch request and return response
   * @param endPoint
   * @param requestHeader
   * @param jsonAsString
   * @param description
   * @returns setRestResponse
   */
  public async patch(
    endPoint: string,
    requestHeader: any,
    jsonAsString: any,
    description: string
  ): Promise<RESTResponse> {
    const headersAsJson = JSON.parse(JSON.stringify(requestHeader));
    Logger.info(`Making PATCH request for ${description}`);
    this.printRequest(endPoint, headersAsJson, jsonAsString, 'patch');
    const response = await this.page.request.patch(endPoint, {
      headers: headersAsJson,
      data: JSON.parse(jsonAsString),
    });
    return await this.setRestResponse(response, description);
  }
  /**
   * Make Delete request and return response
   * @param endPoint
   * @param requestHeader
   * @param description
   * @returns setRestResponse
   */
  public async delete(
    endPoint: string,
    requestHeader: any,
    description: string
  ): Promise<RESTResponse> {
    const headersAsJson = JSON.parse(JSON.stringify(requestHeader));
    Logger.info(`Making DELETE request for ${description}`);
    this.printRequest(endPoint, headersAsJson, '', 'delete');
    const response = await this.page.request.delete(endPoint, { headers: headersAsJson });
    return await this.setRestResponse(response, description);
  }
  /**
   * Prints the API request on console in curl format
   * @param endPoint
   * @param requestHeader
   * @param jsonRequestBody
   * @param method
   */
  private printRequest(
    endPoint: string,
    requestHeader: any,
    jsonRequestBody: string,
    method: string
  ) {
    let requestBody = jsonRequestBody;
    if (jsonRequestBody !== null) {
      requestBody = JSON.stringify(JSON.parse(jsonRequestBody), undefined, 2);
    }
    Logger.info(
      `Request:  ${fetchToCurl({
        url: endPoint,
        headers: requestHeader,
        body: requestBody,
        method: method,
      })}`
    );
  }
}
