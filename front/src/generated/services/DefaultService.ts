/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User'

import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * User
   * @param id
   * @returns User Successful Response
   * @throws ApiError
   */
  public userUsersIdGet(id: string): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{id}',
      path: {
        id: id,
      },
      errors: {
        422: `Validation Error`,
      },
    })
  }
}
