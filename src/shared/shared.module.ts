import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SHARED_SERVICES } from './services';
import { httpInterceptorProviders } from '../core/interceptor/\bindex';
import { CORE_SERVICES } from '../core';
import { ModalModule } from 'ngx-bootstrap';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

registerLocaleData(zh);

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    ...SHARED_SERVICES,
    ...CORE_SERVICES,
    ...httpInterceptorProviders
  ],
  bootstrap: []
})
export class SharedModule {

  private lang = 'zh-cn';

  constructor(private translate: TranslateService) {
    this.initTranslateConfig();
  }

  initTranslateConfig() {
    // 参数类型为数组，数组元素为本地语言json配置文件名
    this.translate.addLangs(['zh-cn', 'en-us']);
    // 设置默认语言
    this.translate.setDefaultLang(this.lang);
    // 检索指定的翻译语言，返回Observable
    this.translate.use(this.lang);
  }
}
