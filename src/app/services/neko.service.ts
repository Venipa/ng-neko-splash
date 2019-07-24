import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NekoImageMd, INekoImage } from '@app/models/neko-image';
import { from } from 'rxjs';
import { Logger } from '@app/core/index.js';

const baseAPIUrl = 'https://nekos.life/api/v2';
const log = new Logger('NekoService');

export const getImageMds = async (): Promise<NekoImageMd[]> =>
  (await import('../../neko-sources/images.env.json')).default.map((x: any) => {
    if (!x.apiBase) {
      x.apiBase = baseAPIUrl;
    }
    if (!x.path) {
      x.path = `img/${x.name}`;
    }
    return x;
  });

@Injectable({
  providedIn: 'root'
})
export class NekoService {
  requestImage(model: NekoImageMd) {
    const nekoUrl = `${baseAPIUrl}/${model.path}`;
    log.debug([model, nekoUrl]);
    return this.http.get<INekoImage>(nekoUrl);
  }
  getImages() {
    return from(getImageMds());
  }
  constructor(private http: HttpClient) {}
}
