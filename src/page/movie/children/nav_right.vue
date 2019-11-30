<template>
    <div id="right">
        <h1>right</h1>
        <Recorder></Recorder>
        <Camera></Camera>
    </div>
</template>

<script>
import Recorder from '../../../components/recorder'
import Camera from '../../../components/camera'
export default {
    name:'nav_right',
    components:{
        Recorder,
        Camera
    }
}
</script>

<style>

</style>
