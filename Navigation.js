//
// Copyright (c) 2017-present, by Evan Bacon. All Rights Reserved.
// @author Evan Bacon / https://github.com/EvanBacon
//

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import {Platform} from 'react-native';
import * as Scenes from './Scenes';
import * as Screens from './Screens';
import Colors from './Colors'
import Settings from './Settings'

export const Routes = {
  AnimationCloth: {
    title: 'Animation Cloth',
    key: 'AnimationCloth',
    description: 'Simple Cloth Simulation Verlet integration with relaxed constraints',
    link: 'https://threejs.org/examples/webgl_animation_cloth.html',
    screen: Scenes.AnimationCloth,
  },
  SkyShader: {
    title: 'Sky Shader',
    key: 'SkyShader',
    description: 'Sky Shader',
    link: 'https://threejs.org/examples/#webgl_shaders_sky',
    screen: Scenes.SkyShader,
  },
  OceanShader: {
    title: 'Ocean Shader',
    key: 'OceanShader',
    description: 'Ocean Shader',
    link: 'https://threejs.org/examples/#webgl_shaders_ocean2',
    screen: Scenes.OceanShader,
  },
  SkinningBlending: {
    title: 'Skinning Blending',
    key: 'SkinningBlending',
    description: 'Skinning And Blending Models',
    link: 'https://threejs.org/examples/#webgl_animation_skinning_blending',
    screen: Scenes.SkinningBlending,
  },
  ParticleSystem: {
    title: 'Particle System',
    key: 'ParticleSystem',
    description: 'GPU Particle System',
    link: 'https://threejs.org/examples/?q=particl#webgl_gpu_particle_system',
    screen: Scenes.ParticleSystem,
  },
  VoxelPainter: {
    title: 'Voxel Painter',
    key: 'VoxelPainter',
    description: 'Interactive Voxel Scene',
    link: 'https://threejs.org/examples/#webgl_interactive_voxelpainter',
    screen: Scenes.VoxelPainter,
  },
  EditorLoader: {
    title: 'Editor Loader',
    key: 'EditorLoader',
    description: 'Loader for app.json exported from editor',
    link: 'https://github.com/mrdoob/three.js/tree/master/editor',
    screen: Scenes.EditorLoader,
  }
};

const navigationOptions = {
  headerTintColor: Colors.tintColor,
  headerStyle: {
    backgroundColor: Colors.headerColor
  },
  headerBackTitle: "Back"
}

export const configuration = [
  {
    title: "Animation",
    key: "Animation",
    data: [
      Routes.AnimationCloth,
      Routes.SkinningBlending
    ]
  },
  {
    title: "Shader",
    key: "Shader",
    data: [
      Routes.SkyShader,
      Routes.OceanShader
    ]
  },
  {
    title: "Particle",
    key: "Particle",
    data: [
      Routes.ParticleSystem,
    ]
  },
  {
    title: "Interactive",
    key: "Interactive",
    data: [
      Routes.VoxelPainter,
    ]
  },
  {
    title: "Loader",
    key: "Loader",
    data: [
      Routes.EditorLoader
    ]
  }
]


const AppNavigator = StackNavigator(
  {
    ...Routes,
    Home: {
      screen: Screens.Home,
    },
  },
  {
    initialRouteName: Settings.initialRouteName,
    navigationOptions
    // headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;
