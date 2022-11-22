import { useMutation, gql } from "@apollo/client";
import {
  VoucherAdvancedInput,
  RootMutationUpdateAdvancedVoucherArgs,
  Voucher as VoucherType,
  CurrencyCode,
} from "../src/__generated__/graphql";
import { FormEvent, useState } from "react";
import { TextInput, Button } from "@mantine/core";

const UPDATE_ADVANCED_INVOICE = gql`
  mutation updateAdvancedVoucher($input: VoucherAdvancedInput!) {
    updateAdvancedVoucher(input: $input) {
      id
    }
  }
`;

const amount = {
  amount: 100,
  currency: { code: CurrencyCode.Nok, amount: 100 },
};
const credit = {
  account: 3000,
  vatCode: 3,
};

const defaultValues: VoucherAdvancedInput = {
  amounts: [
    {
      amount,
      description: "Test",
      credit,
      debit: credit,
    },
  ],
  description: "Test",
  transactionDate: "2022-11-21",
};

export default function Voucher() {
  const [state, setState] = useState<VoucherAdvancedInput>(defaultValues);

  const [createVoucher, { data, loading, error }] = useMutation<
    Pick<VoucherType, "id">,
    RootMutationUpdateAdvancedVoucherArgs
  >(UPDATE_ADVANCED_INVOICE);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createVoucher({
      variables: {
        input: state,
      },
    });
  };

  return (
    <div className="center-form">
      {data ? (
        <h1 className="center-form">
          <h1>Success</h1>
          <h2>😎✌️👌✌️😎</h2>
        </h1>
      ) : (
        <>
          <h2>Create Advanced Voucher</h2>
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <TextInput
              label="Description"
              type="text"
              name="description"
              value={state.amounts[0]?.description}
              onChange={(e) => {
                const value = e.currentTarget.value;
                setState((prevState) => {
                  return {
                    ...prevState,
                    amounts: [
                      {
                        account: credit,
                        amount,
                        ...prevState.amounts[0],
                        description: value,
                      },
                    ],
                  };
                });
              }}
            />
            <TextInput
              label="Amount"
              type="number"
              name="amount"
              value={state.amounts[0]?.amount?.amount}
              onChange={(e) => {
                const value = e.currentTarget.value;
                setState((prevState) => {
                  return {
                    ...prevState,
                    currency: {
                      code: CurrencyCode.Nok,
                      amount: Number(value),
                    },
                  };
                });
              }}
            />
            <TextInput
              label="Transaction Date"
              type="Date"
              name="transactionDate"
              value={state.transactionDate}
              onChange={(e) => {
                const value = e.currentTarget.value;
                setState((prevState) => {
                  return {
                    ...prevState,
                    transactionDate: new Date(value),
                  };
                });
              }}
            />
            <Button type="submit">Send</Button>
          </form>
        </>
      )}
    </div>
  );
}
