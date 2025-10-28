// types/three.d.ts
declare module 'three/examples/jsm/postprocessing/EffectComposer.js' {
  import { WebGLRenderer, WebGLRenderTarget } from 'three';
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';

  export class EffectComposer {
    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
    render(deltaTime?: number): void;
    reset(renderTarget?: WebGLRenderTarget): void;
    setSize(width: number, height: number): void;
    setPixelRatio(pixelRatio: number): void;
    addPass(pass: Pass): void;
    insertPass(pass: Pass, index: number): void;
    removePass(pass: Pass): void;
    isLastEnabledPass(passIndex: number): boolean;
    passes: Pass[];
    // Добавляем метод dispose
    dispose(): void;
  }

  export { EffectComposer };
}

declare module 'three/examples/jsm/postprocessing/RenderPass.js' {
  import { Scene, Camera, Color, ColorRepresentation } from 'three';
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';

  export class RenderPass extends Pass {
    constructor(scene: Scene, camera: Camera, overrideMaterial?: any, clearColor?: ColorRepresentation, clearAlpha?: number);
    scene: Scene;
    camera: Camera;
    overrideMaterial: any;
    clearColor: ColorRepresentation;
    clearAlpha: number;
    clearDepth: boolean;
  }

  export { RenderPass };
}

declare module 'three/examples/jsm/postprocessing/UnrealBloomPass.js' {
  import { Vector2, Color, WebGLRenderTarget } from 'three';
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';

  export class UnrealBloomPass extends Pass {
    constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
    setSize(width: number, height: number): void;
    strength: number;
    radius: number;
    threshold: number;
    clearColor: Color;
    renderTargetsHorizontal: WebGLRenderTarget[];
    renderTargetsVertical: WebGLRenderTarget[];
    nMips: number;
    renderTargetBright: WebGLRenderTarget;
    highPassUniforms: any;
    materialHighPassFilter: any;
    separableBlurMaterials: any[];
    compositeMaterial: any;
    bloomTintColors: Color[];
    copyUniforms: any;
    materialCopy: any;
    oldClearColor: Color;
    oldClearAlpha: number;
    basic: any;
    fsQuad: any;
  }

  export { UnrealBloomPass };
}

declare module 'three/examples/jsm/postprocessing/ShaderPass.js' {
  import { ShaderMaterial, WebGLRenderTarget, IUniform } from 'three';
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';

  type ShaderObject = {
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;
  };

  export class ShaderPass extends Pass {
    constructor(shader: ShaderMaterial | ShaderObject, textureID?: string);
    textureID: string;
    uniforms: { [uniform: string]: IUniform };
    material: ShaderMaterial;
    fsQuad: any;
  }

  export { ShaderPass };
}

declare module 'three/examples/jsm/postprocessing/Pass.js' {
  import { WebGLRenderer, WebGLRenderTarget } from 'three';

  export class Pass {
    enabled: boolean;
    needsSwap: boolean;
    clear: boolean;
    renderToScreen: boolean;
    setSize?(width: number, height: number): void;
    render?(
      renderer: WebGLRenderer, 
      writeBuffer: WebGLRenderTarget, 
      readBuffer: WebGLRenderTarget, 
      deltaTime: number, 
      maskActive: boolean
    ): void;
  }

  export { Pass };
}