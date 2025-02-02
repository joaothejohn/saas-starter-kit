import { ResetPasswordForm } from '@/components/auth';
import { AuthLayout } from '@/components/layouts';
import { SUPPORTED_LANGUAGES } from '@/lib/language';
import type { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from 'types';

const ResetPasswordPage: NextPageWithLayout = () => {
  return <ResetPasswordForm />;
};

ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout heading="Reset Password" description="Enter new password">
      {page}
    </AuthLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { locale }: GetServerSidePropsContext = context;

  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common'], null, SUPPORTED_LANGUAGES) : {}),
    },
  };
};

export default ResetPasswordPage;
