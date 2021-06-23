import * as Apollo from 'apollo-angular';
import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ExampleGql extends Apollo.Query<
  any,
  any
> {
  document = ExampleDocument;


  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export type ExampleQuery = { __typename?: 'Query' } & {
  lease: { __typename?: 'ExampleType' } & Pick<
  ExampleType,
    | 'id'
  >;
};

export type ExampleType = {
  __typename?: 'ExampleType';
  id: Scalars['ID'];
};

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** Date formatted as yyyy-MM-dd */
  DateOnly: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Financial amount in Euros */
  Price: any;
  /** Partial date containing a year and a month formatted as yyyy-MM */
  YearMonthOnly: any;
};


export const ExampleDocument = gql`
    query exampleQuery($input: InputLease!) {
  example(input: $input) {
    id
  }
}
    `;