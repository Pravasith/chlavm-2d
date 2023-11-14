export enum LOAD_ITEMS {
    'ENV_MAP_TEXTURE' = 'env_map_texture',
    'YURT_MODEL' = 'yurt_model'
}

export interface ISource {
    name: LOAD_ITEMS
    type: 'cubeTexture' | 'gltfModel' | 'texture'
    path: string | string[]
}

const sources: ISource[] = [
    // {
    //     name: LOAD_ITEMS.ENV_MAP_TEXTURE,
    //     type: 'cubeTexture',
    //     path: [
    //         'textures/envMap/px.jpg',
    //         'textures/envMap/nx.jpg',
    //         'textures/envMap/py.jpg',
    //         'textures/envMap/ny.jpg',
    //         'textures/envMap/pz.jpg',
    //         'textures/envMap/nz.jpg',
    //     ],
    // },
    // {
    //     name: 'grassColorTexture',
    //     type: 'texture',
    //     path: 'textures/dirt/color.jpg',
    // },
    // {
    //     name: 'grassNormalTexture',
    //     type: 'texture',
    //     path: 'textures/dirt/normal.jpg',
    // },
    {
        name: LOAD_ITEMS.YURT_MODEL,
        type: 'gltfModel',
        path: 'models/yurt.gltf',
    },
]

export default sources
