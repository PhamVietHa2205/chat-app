import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { RouteUrl } from "@/models/constants";

const Login = () => {
    const { t } = useTranslation("common");
    const router = useRouter();

    const handleSubmitFormLogin = (values: any, actions: any) => {
        router.push(RouteUrl.DASHBOARD, RouteUrl.DASHBOARD, { locale: "en" });
    }

    const handleSubmitFormSignup = (values: any, action: any) => {
        router.push(RouteUrl.DASHBOARD, RouteUrl.DASHBOARD, { locale: "en" });
    }

    return (
        <>
            <div className="site d-flex flex-column justify-content-center align-items-center">
                <div className="row my-auto w-100">
                    <div className="col-md-6 mx-auto p-0">
                        <div className="card mx-auto">
                            <div className="login-box">
                                <div className="login-snip">
                                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">{t('login')}</label>
                                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">{t('signup')}</label>
                                    <div className="login-space">
                                        <Formik
                                            initialValues={{
                                                user: "",
                                                password: "",
                                            }}
                                            onSubmit={(values, actions) => handleSubmitFormLogin(values, actions)}>
                                            {({ errors, touched, values, handleChange }) => (
                                                <Form>
                                                    <div className="login">
                                                        <div className="group">
                                                            <label htmlFor="user" className="label mb-2">{t('username')}</label>
                                                            <input id="user" type="text" className="input" placeholder={t('enterYourUsername')} />
                                                        </div>
                                                        <div className="group">
                                                            <label htmlFor="password" className="label mb-2">{t('password')}</label>
                                                            <input id="password" type="password" className="input" data-type="password" placeholder={t('enterYourPassword')} />
                                                        </div>
                                                        <div className="group">
                                                            <input id="check" type="checkbox" className="check" checked />
                                                            <label htmlFor="check"><span className="icon me-3"></span>{t('rememberMe')}</label>
                                                        </div>
                                                        <div className="group">
                                                            <input type="submit" className="button" value={t('signIn')} />
                                                        </div>
                                                        <div className="hr"></div>
                                                        <div className="foot">
                                                            <a href="#">{t('forgotPassword')}?</a>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                        <Formik
                                            initialValues={{
                                                user: "",
                                                password: "",
                                                passwordConfirm: "",
                                                email: "",
                                            }}
                                            onSubmit={(values, actions) => handleSubmitFormSignup(values, actions)}>
                                            {({ errors, touched, values, handleChange }) => (
                                                <Form>
                                                    <div className="sign-up-form">
                                                        <div className="group">
                                                            <label htmlFor="user" className="label mb-2">{t('username')}</label>
                                                            <input id="user" type="text" className="input" placeholder={t('enterYourUsername')} />
                                                        </div>
                                                        <div className="group">
                                                            <label htmlFor="password" className="label mb-2">{t('password')}</label>
                                                            <input id="password" type="password" className="input" data-type="password" placeholder={t('enterYourPassword')} />
                                                        </div>
                                                        <div className="group">
                                                            <label htmlFor="passwordConfirm" className="label mb-2">{t('repeatPassword')}</label>
                                                            <input id="passwordConfirm" type="password" className="input" data-type="password" placeholder={t('repeatYourPassword')} />
                                                        </div>
                                                        <div className="group">
                                                            <label htmlFor="email" className="label mb-2">{t('emailAddress')}</label>
                                                            <input id="email" type="text" className="input" placeholder={t('enterYourEmailAddress')} />
                                                        </div>
                                                        <div className="group">
                                                            <input type="submit" className="button" value={t('signUp')} />
                                                        </div>
                                                        <div className="hr"></div>
                                                        <div className="foot">
                                                            <label htmlFor="tab-1">{t('alreadyMember')}? <span className="text-white">{t('login')}</span></label>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", [
                'common',
            ])),
        },
    }
}

export default memo(Login);