import { useMutation, gql } from "@apollo/client";
import React from "react";
import { Voucher } from "../../src/__generated__/graphql";

const REGISTER_ADVANCED_VOUCHER = gql`
  mutation registerAdvancedVoucher(
    $input: VoucherAdvancedInput!
    $transactionOptions: TransactionPagingOptions
  ) {
    registerAdvancedVoucher(input: $input) {
      id
    }
  }
`;

export default function Voucher() {
  const [state, setState] = React.useState<Voucher>();

  const [createVoucher, { data, loading, error }] = useMutation(
    REGISTER_ADVANCED_VOUCHER as any,
    {
      variables: {
        input: state,
      },
    }
  );

  const handleCreateVoucher = () => {
    createVoucher({
      variables: {
        input: state,
      },
    });
  };

  return <div>voucher</div>;
}
