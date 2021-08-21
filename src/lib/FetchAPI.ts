/* eslint-disable @typescript-eslint/naming-convention */
import { IResolve } from '../interfaces'
import nodeFetch from 'node-fetch'

/*
 * FetchAPI class version 1.0.0
 */
class FetchAPI {
  protected apiURL: string

  constructor(apiURL: string) {
    this.apiURL = apiURL
  }

  public getRequest = async <TReturnValue>(apiRoute: string): Promise<TReturnValue> => {
    return new Promise((resolve: IResolve<TReturnValue>): void => {
      const url = `${this.apiURL}${apiRoute}`
      nodeFetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'get',
      })
        .then((res: any): string => res.text())
        .then((text: string): void => {
          const data: TReturnValue = JSON.parse(text)
          resolve(data)
        })
        .catch((error: any): void => {
          this.logResponseError(error, FetchAPI.name, url)
          resolve(null)
        })
    })
  }

  public postRequest = async <TParam, TReturnValue>(apiRoute: string, param: TParam): Promise<TReturnValue> => {
    return new Promise((resolve: IResolve<TReturnValue>): void => {
      const url = `${this.apiURL}${apiRoute}`
      nodeFetch(url, {
        body: JSON.stringify(param),
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
      })
        .then((res: any): string => res.text())
        .then((text: string): void => {
          const data: TReturnValue = JSON.parse(text)
          resolve(data)
        })
        .catch((error: any): void => {
          this.logResponseError(error, FetchAPI.name, url, param)
          resolve(null)
        })
    })
  }

  private logResponseError = <TParam>(error: any, apiName: string, url: string, param?: TParam): void => {
    let headerMessage = `Error ${apiName} class on url: ${url}.`

    if (param) {
      headerMessage = headerMessage + ` Param: ${JSON.stringify(param, null, 4)}`
    }

    console.log(error, headerMessage)
  }
}

export default FetchAPI
