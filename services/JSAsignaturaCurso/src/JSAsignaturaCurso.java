//importar librerias y complementos
import com.aprendoz_test.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;

import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;

import com.wavemaker.runtime.server.ParamName;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;

import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import java.awt.*;
import java.awt.Color;
import com.wavemaker.runtime.RuntimeAccess;

public class JSAsignaturaCurso extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {   
   
   public DownloadResponse getReport(String idasig, String idcurso) throws Exception {
       
        int a=Integer.valueOf(idasig);
        int idc= Integer.valueOf(idcurso);
   
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
	  Aprendoz_test service = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
          service.begin();
          Session session= service.getDataServiceManager().getSession();
       try {

          //enviar parametros al reporte
          Map parameters= new HashMap();
          parameters.put("id_curso", idc);
          parameters.put("id_asignatura", a);
          System.out.println("capturados!");
          
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("aprendizaje_estudiante2.jasper");
          
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("aprendizaje_estudiante2.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("MatrizAprendizajeEstudiante.pdf");
          
        
          
          
       } catch(Exception e) {
          System.out.println("Error creando el PDF");
          e.printStackTrace();
       }
	finally{
 	  service.commit();
	}
       return ret;
    }

}