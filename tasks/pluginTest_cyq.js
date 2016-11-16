/*
 * pluginTest-cyq
 * 
 *
 * Copyright (c) 2016 Ailsa
 * Licensed under the MIT license.
 */

'use strict';
var path=require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pluginTest_cyq', 'create grunt plugin for the first time', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who:'dog',
      commentSymbol: '//'
    });
    var testReg=/    QQQQ   QQQQQQ   QQQQ/;
    var who=options.who,
        commentSymbol=options.commentSymbol,
        commentFilePath=path.join(__dirname,'asset/a.txt'),
        commentContent=grunt.file.read(commentFilePath);
        var commentContentArr=commentContent.split(grunt.util.normalizelf('\n'));
        commentContentArr.forEach(function(item,index,arr){
          arr[index]=commentSymbol+item;
        });
        commentContent=commentContentArr.join(grunt.util.normalizelf('\n'));

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent=grunt.file.read(filepath),
            newFileContent=commentContent+grunt.util.normalizelf('\n')+originalFileContent;
            if(testReg.test(originalFileContent)){return;}
            grunt.file.write(filepath,newFileContent);
        //return grunt.file.read(filepath); // 读取每个文件路径下的文件内容
      }); // .join(grunt.util.normalizelf(options.separator)) 将所有文件内容拼接起来

      // Handle options.
      //src += options.punctuation; // 给拼接后的文件内容末尾添加标点符号配置

      // Write the destination file.
      //grunt.file.write(file.dest, src); // 将拼接后的内容写入file.dest路径的文件中

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
