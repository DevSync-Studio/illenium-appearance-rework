interface Mocks {
  [key: string]: any;
}

export const mocks: Mocks = {};

// Mock theme configuration
mocks['get_theme_configuration'] = () => ({
  currentTheme: 'modern',
  themes: [
    {
      id: 'modern',
      name: 'Modern',
      borderRadius: '8px',
      fontColor: '255, 255, 255',
      fontColorHover: '255, 255, 255',
      fontColorSelected: '0, 0, 0',
      fontFamily: 'Inter',
      primaryBackground: '30, 30, 30',
      primaryBackgroundSelected: '255, 255, 255',
      secondaryBackground: '20, 20, 20',
      scaleOnHover: true,
      sectionFontWeight: 'bold',
      smoothBackgroundTransition: true,
    }
  ]
});

// Mock locales
mocks['appearance_get_locales'] = () => ({
  modal: {
    save: {
      title: 'Save Changes',
      description: 'Are you sure you want to save these changes?'
    },
    exit: {
      title: 'Exit',
      description: 'Are you sure you want to exit without saving?'
    },
    accept: 'Accept',
    decline: 'Cancel'
  },
  ped: {
    title: 'Character Model',
    model: 'Model'
  },
  headBlend: {
    title: 'Head Blend',
    shape: {
      title: 'Shape',
      firstOption: 'First Parent',
      secondOption: 'Second Parent',
      mix: 'Mix'
    },
    skin: {
      title: 'Skin',
      firstOption: 'First Parent',
      secondOption: 'Second Parent',
      mix: 'Mix'
    },
    race: {
      title: 'Race',
      shape: 'Shape',
      skin: 'Skin',
      mix: 'Mix'
    }
  },
  faceFeatures: {
    title: 'Face Features',
    nose: {
      title: 'Nose',
      width: 'Width',
      height: 'Height',
      size: 'Size',
      boneHeight: 'Bone Height',
      boneTwist: 'Bone Twist',
      peakHeight: 'Peak Height'
    },
    eyebrows: {
      title: 'Eyebrows',
      height: 'Height',
      depth: 'Depth'
    },
    cheeks: {
      title: 'Cheeks',
      boneHeight: 'Bone Height',
      boneWidth: 'Bone Width',
      width: 'Width'
    },
    eyesAndMouth: {
      title: 'Eyes and Mouth',
      eyesOpening: 'Eyes Opening',
      lipsThickness: 'Lips Thickness'
    },
    jaw: {
      title: 'Jaw',
      width: 'Width',
      size: 'Size'
    },
    chin: {
      title: 'Chin',
      lowering: 'Lowering',
      length: 'Length',
      size: 'Size',
      hole: 'Hole'
    },
    neck: {
      title: 'Neck',
      thickness: 'Thickness'
    }
  },
  headOverlays: {
    title: 'Head Overlays',
    hair: {
      title: 'Hair',
      style: 'Style',
      color: 'Color',
      highlight: 'Highlight',
      fade: 'Fade',
      texture: 'Texture'
    },
    opacity: 'Opacity',
    style: 'Style',
    color: 'Color',
    secondColor: 'Second Color',
    blemishes: 'Blemishes',
    beard: 'Beard',
    eyebrows: 'Eyebrows',
    ageing: 'Ageing',
    makeUp: 'Make Up',
    blush: 'Blush',
    complexion: 'Complexion',
    sunDamage: 'Sun Damage',
    lipstick: 'Lipstick',
    moleAndFreckles: 'Mole and Freckles',
    chestHair: 'Chest Hair',
    bodyBlemishes: 'Body Blemishes',
    eyeColor: 'Eye Color'
  },
  components: {
    title: 'Components',
    drawable: 'Drawable',
    texture: 'Texture',
    mask: 'Mask',
    upperBody: 'Upper Body',
    lowerBody: 'Lower Body',
    bags: 'Bags',
    shoes: 'Shoes',
    scarfAndChains: 'Scarf and Chains',
    shirt: 'Shirt',
    bodyArmor: 'Body Armor',
    decals: 'Decals',
    jackets: 'Jackets',
    head: 'Head'
  },
  props: {
    title: 'Props',
    drawable: 'Drawable',
    texture: 'Texture',
    hats: 'Hats',
    glasses: 'Glasses',
    ear: 'Ear',
    watches: 'Watches',
    bracelets: 'Bracelets'
  },
  tattoos: {
    title: 'Tattoos',
    items: {
      'ZONE_TORSO': 'Torso',
      'ZONE_HEAD': 'Head',
      'ZONE_LEFT_ARM': 'Left Arm',
      'ZONE_RIGHT_ARM': 'Right Arm',
      'ZONE_LEFT_LEG': 'Left Leg',
      'ZONE_RIGHT_LEG': 'Right Leg'
    },
    apply: 'Apply',
    delete: 'Delete',
    deleteAll: 'Delete All',
    opacity: 'Opacity'
  }
});

// Mock appearance settings
mocks['appearance_get_settings'] = () => ({
  appearanceSettings: {
    ped: {
      model: {
        items: ['mp_m_freemode_01', 'mp_f_freemode_01']
      }
    },
    tattoos: {
      items: {
        'ZONE_HAIR': [
          {
            name: 'fade_1',
            label: 'Fade 1',
            hashMale: 'test_hash_male',
            hashFemale: 'test_hash_female',
            zone: 'ZONE_HAIR',
            collection: 'multiplayer_overlays',
            opacity: 1.0
          }
        ]
      },
      opacity: {
        min: 0.1,
        max: 1.0,
        factor: 0.1
      }
    },
    components: Array.from({ length: 12 }, (_, i) => ({
      component_id: i,
      drawable: { min: 0, max: 255 },
      texture: { min: 0, max: 255 },
      blacklist: { drawables: [], textures: [] }
    })),
    props: [0, 1, 2, 6, 7].map(id => ({
      prop_id: id,
      drawable: { min: -1, max: 255 },
      texture: { min: -1, max: 255 },
      blacklist: { drawables: [], textures: [] }
    })),
    headBlend: {
      shapeFirst: { min: 0, max: 45 },
      shapeSecond: { min: 0, max: 45 },
      shapeThird: { min: 0, max: 45 },
      skinFirst: { min: 0, max: 45 },
      skinSecond: { min: 0, max: 45 },
      skinThird: { min: 0, max: 45 },
      shapeMix: { min: 0, max: 1, factor: 0.1 },
      skinMix: { min: 0, max: 1, factor: 0.1 },
      thirdMix: { min: 0, max: 1, factor: 0.1 }
    },
    faceFeatures: {
      noseWidth: { min: -1, max: 1, factor: 0.1 },
      nosePeakHigh: { min: -1, max: 1, factor: 0.1 },
      nosePeakSize: { min: -1, max: 1, factor: 0.1 },
      noseBoneHigh: { min: -1, max: 1, factor: 0.1 },
      nosePeakLowering: { min: -1, max: 1, factor: 0.1 },
      noseBoneTwist: { min: -1, max: 1, factor: 0.1 },
      eyeBrownHigh: { min: -1, max: 1, factor: 0.1 },
      eyeBrownForward: { min: -1, max: 1, factor: 0.1 },
      cheeksBoneHigh: { min: -1, max: 1, factor: 0.1 },
      cheeksBoneWidth: { min: -1, max: 1, factor: 0.1 },
      cheeksWidth: { min: -1, max: 1, factor: 0.1 },
      eyesOpening: { min: -1, max: 1, factor: 0.1 },
      lipsThickness: { min: -1, max: 1, factor: 0.1 },
      jawBoneWidth: { min: -1, max: 1, factor: 0.1 },
      jawBoneBackSize: { min: -1, max: 1, factor: 0.1 },
      chinBoneLowering: { min: -1, max: 1, factor: 0.1 },
      chinBoneLenght: { min: -1, max: 1, factor: 0.1 },
      chinBoneSize: { min: -1, max: 1, factor: 0.1 },
      chinHole: { min: -1, max: 1, factor: 0.1 },
      neckThickness: { min: -1, max: 1, factor: 0.1 }
    },
    headOverlays: {
      blemishes: { style: { min: 0, max: 23 }, opacity: { min: 0, max: 1, factor: 0.1 } },
      beard: { style: { min: 0, max: 28 }, opacity: { min: 0, max: 1, factor: 0.1 }, color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] } },
      eyebrows: { style: { min: 0, max: 33 }, opacity: { min: 0, max: 1, factor: 0.1 }, color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] } },
      ageing: { style: { min: 0, max: 14 }, opacity: { min: 0, max: 1, factor: 0.1 } },
      makeUp: { style: { min: 0, max: 74 }, opacity: { min: 0, max: 1, factor: 0.1 }, color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] } },
      blush: { style: { min: 0, max: 6 }, opacity: { min: 0, max: 1, factor: 0.1 }, color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] } },
      complexion: { style: { min: 0, max: 11 }, opacity: { min: 0, max: 1, factor: 0.1 } },
      sunDamage: { style: { min: 0, max: 10 }, opacity: { min: 0, max: 1, factor: 0.1 } },
      lipstick: { style: { min: 0, max: 9 }, opacity: { min: 0, max: 1, factor: 0.1 }, color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] } },
      moleAndFreckles: { style: { min: 0, max: 17 }, opacity: { min: 0, max: 1, factor: 0.1 } },
      chestHair: { style: { min: 0, max: 16 }, opacity: { min: 0, max: 1, factor: 0.1 }, color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] } },
      bodyBlemishes: { style: { min: 0, max: 11 }, opacity: { min: 0, max: 1, factor: 0.1 } }
    },
    hair: {
      style: { min: 0, max: 76 },
      color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255]] },
      highlight: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255]] },
      texture: { min: 0, max: 10 },
      blacklist: { drawables: [], textures: [] }
    },
    eyeColor: { min: 0, max: 31 }
  }
});

// Mock appearance data
mocks['appearance_get_data'] = () => ({
  config: {
    ped: true,
    headBlend: true,
    faceFeatures: true,
    headOverlays: true,
    components: true,
    componentConfig: {
      masks: true,
      upperBody: true,
      lowerBody: true,
      bags: true,
      shoes: true,
      scarfAndChains: true,
      shirts: true,
      bodyArmor: true,
      decals: true,
      jackets: true
    },
    props: true,
    propConfig: {
      hats: true,
      glasses: true,
      ear: true,
      watches: true,
      bracelets: true
    },
    tattoos: true,
    enableExit: true,
    hasTracker: false,
    automaticFade: true
  },
  appearanceData: {
    model: 'mp_m_freemode_01',
    tattoos: {},
    components: Array.from({ length: 12 }, (_, i) => ({
      component_id: i,
      drawable: 0,
      texture: 0
    })),
    props: [0, 1, 2, 6, 7].map(id => ({
      prop_id: id,
      drawable: -1,
      texture: 0
    })),
    headBlend: {
      shapeFirst: 0,
      shapeSecond: 0,
      shapeThird: 0,
      shapeMix: 0,
      skinFirst: 0,
      skinSecond: 0,
      skinThird: 0,
      skinMix: 0,
      thirdMix: 0
    },
    faceFeatures: {
      noseWidth: 0,
      nosePeakHigh: 0,
      nosePeakSize: 0,
      noseBoneHigh: 0,
      nosePeakLowering: 0,
      noseBoneTwist: 0,
      eyeBrownHigh: 0,
      eyeBrownForward: 0,
      cheeksBoneHigh: 0,
      cheeksBoneWidth: 0,
      cheeksWidth: 0,
      eyesOpening: 0,
      lipsThickness: 0,
      jawBoneWidth: 0,
      jawBoneBackSize: 0,
      chinBoneLowering: 0,
      chinBoneLenght: 0,
      chinBoneSize: 0,
      chinHole: 0,
      neckThickness: 0
    },
    headOverlays: {
      blemishes: { style: 0, opacity: 0 },
      beard: { style: 0, opacity: 0, color: 0 },
      eyebrows: { style: 0, opacity: 0, color: 0 },
      ageing: { style: 0, opacity: 0 },
      makeUp: { style: 0, opacity: 0, color: 0, secondColor: 0 },
      blush: { style: 0, opacity: 0, color: 0 },
      complexion: { style: 0, opacity: 0 },
      sunDamage: { style: 0, opacity: 0 },
      lipstick: { style: 0, opacity: 0, color: 0 },
      moleAndFreckles: { style: 0, opacity: 0 },
      chestHair: { style: 0, opacity: 0, color: 0 },
      bodyBlemishes: { style: 0, opacity: 0 }
    },
    hair: {
      style: 0,
      color: 0,
      highlight: 0,
      texture: 0
    },
    eyeColor: 0
  }
});

// Mock other functions
mocks['appearance_change_model'] = (model: string) => ({
  appearanceSettings: mocks['appearance_get_settings']().appearanceSettings,
  appearanceData: { ...mocks['appearance_get_data']().appearanceData, model }
});

mocks['appearance_change_component'] = (component: any) => ({
  component_id: component.component_id,
  drawable: { min: 0, max: 255 },
  texture: { min: 0, max: 255 },
  blacklist: { drawables: [], textures: [] }
});

mocks['appearance_change_prop'] = (prop: any) => ({
  prop_id: prop.prop_id,
  drawable: { min: -1, max: 255 },
  texture: { min: -1, max: 255 },
  blacklist: { drawables: [], textures: [] }
});

mocks['appearance_change_hair'] = (hair: any) => ({
  style: { min: 0, max: 76 },
  color: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] },
  highlight: { items: [[255, 0, 0], [0, 255, 0], [0, 0, 255]] },
  texture: { min: 0, max: 10 },
  blacklist: { drawables: [], textures: [] }
});

// Mock functions that don't need to return anything
const mockVoidFunctions = [
  'appearance_change_head_blend',
  'appearance_change_face_feature',
  'appearance_change_head_overlay',
  'appearance_change_eye_color',
  'appearance_apply_tattoo',
  'appearance_preview_tattoo',
  'appearance_delete_tattoo',
  'appearance_wear_clothes',
  'appearance_remove_clothes',
  'appearance_save',
  'appearance_exit',
  'appearance_turn_around',
  'appearance_set_camera',
  'appearance_rotate_camera',
  'rotate_left',
  'rotate_right'
];

mockVoidFunctions.forEach(func => {
  mocks[func] = () => true;
});

export default function mock(event: string, value: any): void {
  mocks[event] = value;
}
